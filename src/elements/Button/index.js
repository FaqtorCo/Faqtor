/* eslint-disable  */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Button({
  onClick = () => { },
  type = 'button',
  isExternal = false,
  href = '',
  to = '', // Add 'to' prop for React Router links
  as = null, // Add 'as' prop to support custom components
  className = '',
  style = {},
  target = '',
  children = null,
  ...restProps // Spread any additional props
}) {
  const onClickHandler = (e) => {
    if (onClick) onClick(e);
  };

  // If 'as' prop is provided, render that component
  if (as) {
    const Component = as;
    return (
      <Component
        to={to}
        href={href}
        className={className}
        style={style}
        onClick={onClickHandler}
        target={target === '_blank' ? '_blank' : undefined}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...restProps}
      >
        {children}
      </Component>
    );
  }

  if (type === 'link') {
    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          style={style}
          target={target === '_blank' ? '_blank' : undefined}
          rel="noopener noreferrer"
          onClick={onClickHandler}
        >
          {children}
        </a>
      );
    }

    return (
      <NavLink
        to={to || href}
        className={className}
        style={style}
        onClick={onClickHandler}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={className}
      type={type}
      style={style}
      onClick={onClickHandler}
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'link', 'submit', 'reset']),
  href: PropTypes.string,
  to: PropTypes.string, // Add to prop type
  as: PropTypes.elementType, // Add as prop type
  onClick: PropTypes.func,
  target: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  children: PropTypes.node,
  isExternal: PropTypes.bool,
};