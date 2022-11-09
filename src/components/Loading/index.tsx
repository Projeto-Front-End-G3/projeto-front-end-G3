import { useContext } from "react";
import { motion } from "framer-motion";

import { AnnouncementContext } from "../../contexts/AnnouncementContext";

interface iLoadingProps {
  children: React.ReactNode;
}

const spinTransition = {
  loop: Infinity,
  duration: "0.8",
};

const Loading = ({ children }: iLoadingProps) => {
  const { loading } = useContext(AnnouncementContext);

  return (
    <>
      {loading ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "90vh",
          }}
        >
          <motion.span
            style={{
              display: "block",
              width: "4rem",
              height: "4rem",
              border: "0.3rem solid #d4c9c96e",
              borderTop: "0.3rem solid #191970",
              borderRadius: "50%",
              position: "absolute",
              boxSizing: "border-box",
              top: "50%",
              left: "50%",
            }}
            animate={{ rotate: 360 }}
            transition={spinTransition}
          />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Loading;
