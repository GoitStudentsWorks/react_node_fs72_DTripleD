import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { verifyThunk } from '../../redux/auth/operations';

import { signup } from "../../redux/auth/operations";
import { AuthNavigate } from "../AuthNav/AuthNav";
import { SignUpSchema } from "./SignUpAndSignInSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { FiEyeOff, FiEye } from "react-icons/fi";
import {
  StyledForm,
  StyledTitle,
  StyledInputWrap,
  StyledInput,
  StyledButton,
  StyledError,
  StyledInnerDiv,
  StyledMessage,
  StyledPasswordDiv,
} from "./AuthForm.styled";
import { toast } from "react-hot-toast";
import { selectTheme } from "../../redux/theme/selectors";
import theme from "../../shared/theme";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    defaultValues: { name: "", email: "", password: "" },
    resolver: yupResolver(SignUpSchema),
  });
  const [isClicked, setIsClicked] = useState(false);
  const currentTheme = useSelector(selectTheme);
  const themes = theme(currentTheme);

  const onSubmit = (data) => {
    dispatch(signup(data));
  };

  const togglePasswordVisibility = () => {
    setIsClicked(!isClicked);
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>Registration</StyledTitle>
      <StyledInnerDiv>
        <StyledInputWrap>
          <StyledInput
            type="text"
            name="name"
            placeholder="Name"
            {...register("name")}
            className={
              errors.name
                ? "invalid-border"
                : dirtyFields.name
                ? "valid-border"
                : ""
            }
          />
          {errors.name && (
            <div>
              <BiErrorCircle
                style={{
                  width: "24px",
                  height: "24px",
                  color: "red",
                  display: "flex",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "24px",
                }}
              />
              <StyledError>{errors.name.message}</StyledError>
            </div>
          )}
          {!errors.name && dirtyFields.name && (
            <div>
              <BiCheckCircle
                style={{
                  width: "24px",
                  height: "24px",
                  color: "#3CBC81",
                  display: "flex",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "24px",
                }}
              />

              <StyledMessage>This is a CORRECT name</StyledMessage>
            </div>
          )}
        </StyledInputWrap>

        <StyledInputWrap>
          <StyledInput
            type="email"
            name="email"
            placeholder="Email"
            {...register("email")}
            className={
              errors.email
                ? "invalid-border"
                : dirtyFields.email
                ? "valid-border"
                : ""
            }
          />
          {errors.email && (
            <div>
              <BiErrorCircle
                style={{
                  width: "24px",
                  height: "24px",
                  color: "red",
                  display: "flex",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "24px",
                }}
              />
              <StyledError>{errors.email.message}</StyledError>
            </div>
          )}
          {!errors.email && dirtyFields.email && (
            <div>
              <BiCheckCircle
                style={{
                  width: "24px",
                  height: "24px",
                  color: "#3CBC81",
                  display: "flex",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "24px",
                }}
              />
              <StyledMessage>This is a CORRECT email</StyledMessage>
            </div>
          )}
        </StyledInputWrap>

        <StyledInputWrap>
          <StyledPasswordDiv>
            <StyledInput
              type={isClicked ? "text" : "password"}
              name="password"
              placeholder="Password"
              {...register("password")}
              className={
                errors.password
                  ? "invalid-border"
                  : dirtyFields.password
                  ? "valid-border"
                  : ""
              }
            />
            {errors.password && (
              <StyledError>{errors.password.message}</StyledError>
            )}
            {!errors.password && dirtyFields.password && (
              <StyledMessage>This is a CORRECT password</StyledMessage>
            )}

            <span
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "24px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {isClicked ? (
                <FiEye color={themes.colors.white} />
              ) : (
                <FiEyeOff color={themes.colors.white} />
              )}
            </span>
          </StyledPasswordDiv>
        </StyledInputWrap>
      </StyledInnerDiv>
      <StyledButton type="submit" disabled={!isValid}>
        Sign Up
      </StyledButton>
      <AuthNavigate />
    </StyledForm>
  );
};

export default SignUpForm;
