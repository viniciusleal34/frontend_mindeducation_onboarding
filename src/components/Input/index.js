import React, { useEffect, useRef, useState, useCallback } from "react";
import { Container, Error } from "./styles";
import { useField } from "@unform/core";
import { FiAlertCircle } from "react-icons/fi";
import InputMask from "react-input-mask";

const Input = ({ name, tamanho, formatar, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFielled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <>
      <Container
        isSize={tamanho}
        isErrored={!!error}
        isFocused={isFocused}
        isFielled={isFielled}
      >
        {Icon && <Icon size={20} />}

        {!formatar ? (
          <input
            defaultValue={defaultValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            ref={inputRef}
            {...rest}
          />
        ) : (
          <InputMask
            defaultValue={defaultValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            mask={formatar}
            ref={inputRef}
            {...rest}
          />
        )}
      </Container>
    </>
  );
};

export default Input;
