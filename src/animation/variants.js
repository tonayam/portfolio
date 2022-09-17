// NAVBAR ANIMATION
const navVariant = {
  hidden: {
    opacity: 0,
    y: -200,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      ease: "easeIn",
      type: "spring",
      stiffness: 250,
      // staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const navLinksVariant = {
  hidden: {
    opacity: 0,
    y: "100%",
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

// HEADER SECTION ANIMATION
const headerVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      type: "spring",
      stiffness: 250,
      when: "beforeChildren",
    },
  },
};

const headerTextVariant = {
  hidden: {
    opacity: 0,
    y: "100%",
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

const headerBtnsVaraints = {
  hidden: {
    opacity: 0,
    y: "100%",
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 1.5,
    },
  },
};

export {
  navVariant,
  navLinksVariant,
  headerVariant,
  headerTextVariant,
  headerBtnsVaraints,
};
