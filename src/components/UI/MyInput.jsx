import { useMask } from "@react-input/mask";

export default function MyInput() {
  const inputRef = useMask({
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });

  return <input ref={inputRef} placeholder="Телефон" />;
}
