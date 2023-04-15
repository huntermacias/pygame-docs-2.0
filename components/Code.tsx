import { useTheme } from "next-themes";
import Highlight, { defaultProps, type Language } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import { FC, useEffect, useState } from "react";

const Code = ({
  code,
  show,
  animated,
  language,
}: {
  code: string;
  show: boolean;
  animated: boolean;
  language: Language;
}) => {
  const { theme: applicationTheme } = useTheme();
  const [text, setText] = useState<string>(animated ? "" : code);

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
          if (i > code.length) {
            clearInterval(intervalId);
          }
        }, 15);

        return () => clearInterval(intervalId);
      }, 40);
    }
  }, [code, show, animated]);

  // array of lines
  const lines = text.split(/\r\n|\r|\n/);

  const theme = applicationTheme === "light" ? lightTheme : darkTheme;

  return (
    <Highlight {...defaultProps} code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className +
            "transition-all w-full bg-transparent duration-100 py-0 no-scrollbar text-xs lg:text-md mt-4"
          }
          style={{
            maxHeight: show ? Number(lines) * 28 : 0,
            opacity: show ? 1 : 0,
          }}
        >
          {tokens.map((line, i) => {
            const { key, ...rest } = getLineProps({ line, key: i });
            const lineTokens = line.map((token, index) => {
              const { key: tokenKey, ...props } = getTokenProps({ token, key: index });
              return <span key={tokenKey} {...props} />;
            });
            return (
              <div key={key} style={{ position: "relative" }} {...rest}>
                {lineTokens}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
  
};


export default Code;
