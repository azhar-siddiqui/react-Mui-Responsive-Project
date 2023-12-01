import { FC, ReactNode } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import { Box } from "@mui/material";

interface ScrollbarProps {
  className?: string;
  children?: ReactNode;
}

const Scrollbar: FC<ScrollbarProps> = ({ children, ...rest }) => {
  return (
    <Scrollbars
      autoHide
      renderThumbVertical={() => {
        return (
          <Box
            sx={{
              width: 5,
              background: `red`,
              borderRadius: `8px`,
              transition: ``,

              "&:hover": {
                background: ``,
              },
            }}
          />
        );
      }}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
