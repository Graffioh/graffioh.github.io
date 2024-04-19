// https://www.youtube.com/watch?v=1OE11AMdbvI
//
import Item from "./item";
import { Resizable } from "re-resizable";
import { useState } from "react";

const RightHandle = () => (
  <div
    className="md:w-1 w-2 ml-1 bg-neutral-600 min-safe-h-screen min-h-screen h-full"
  />
);

export default function FileTree({ items, onContentChange }) {
  const [minWidth, setMinWidth] = useState("20%");
  const [maxWidth, setMaxWidth] = useState("80%");
  const [areFilesHidden, setAreFilesHidden] = useState(false);

  return (
    <>
      <Resizable
        minWidth={minWidth}
        maxWidth={maxWidth}
        className="bg-neutral-900 min-safe-h-screen min-h-screen"
        enable={{ right: true }}
        handleComponent={{
          right: <RightHandle />,
        }}
      >
        <div className="flex justify-between">
          <div className="w-full min-w-full" hidden={areFilesHidden}>
            {items?.children?.map((item) => (
              <div key={item.id}>
                <Item item={item} path={""} onContentChange={onContentChange} />
              </div>
            ))}
          </div>
          <button
            className="text-xl bg-stone-700 h-full px-2 ml-1 md:ml-0"
            onClick={() => {
              setMinWidth(areFilesHidden ? "20%" : "0%");
              setMaxWidth(areFilesHidden ? "60%" : "0%");
              setAreFilesHidden(!areFilesHidden);
            }}
          >
            {areFilesHidden ? ">" : "<"}
          </button>
        </div>
      </Resizable>
    </>
  );
}