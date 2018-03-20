import React from 'react';
import Transition from 'react-transition-group/Transition';

function FadeTransition({ children, duration, in: inProp }) {
  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: 'opacity',
  };
  const transitionStyles = {
    entering: {
      opacity: 0,
    },
    entered: {
      opacity: 1,
    },
    exiting: {
      opacity: 1, // May need to change this to 0 and remove exited
    },
    exited: {
      opacity: 0,
    },
  };

  return (
    <Transition
      in={inProp}
      timeout={{
        enter: 0,
        exit: duration,
      }}
    >
      {
        (status) => {
          if (status === 'exited') {
            return null;
          }
          const currentStyles = transitionStyles[status];
          return React.cloneElement(children, {
            style: Object.assign({}, defaultStyle, currentStyles),
          });
        }
      }
    </Transition>
  );
}

export default FadeTransition;
