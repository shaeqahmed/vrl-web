import { EditText, onSaveProps } from "react-edit-text";

import { state } from "../state"

export const Title = () => {
  const title: string = state.store(s => s.title);
  const setTitle: (t: string) => void = state.store(s => s.setTitle);
  const defaultTitle: string = "My custom VRL scenario";

  const onSave = (p: onSaveProps) => {
    if (!p.value) {
      setTitle(defaultTitle);
    } else {
      setTitle(p.value);
    }
  }

  return <div className="py-2">
    <EditText
      value={title}
      onChange={setTitle}
      className="text-3xl font-semibold dark:text-white focus:bg-gray-200
      dark:focus:bg-gray-300 dark:focus:text-black dark:focus:ring-0"
      onSave={onSave}
    />
  </div>
}