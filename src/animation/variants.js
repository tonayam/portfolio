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
      ease: "easeInOut",
      type: "spring",
      stiffness: 250,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const navLinksVariant = {
  hidden: {
    opacity: 0,
    y: 200,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
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
      ease: "easeInOut",
      type: "spring",
      stiffness: 250,
      staggerChildren: 0.5,
      delayChildren: 0.5,
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
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.5,
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
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 0.5,
      delay: 3.5,
    },
  },
};

// STACK SECTION ANIMATIONS

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.5,
    },
  },
};

const stackVariant = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300 },
  },
};

export {
  navVariant,
  navLinksVariant,
  headerVariant,
  headerTextVariant,
  headerBtnsVaraints,
  container,
  stackVariant,
};
