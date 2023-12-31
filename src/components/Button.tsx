import styled from "styled-components";
import { Link } from "react-scroll";

interface ButtonProps{
  primary:number;
  dark:number
}

export const Button = styled(Link)<ButtonProps>`
  padding: 16px 50px;
  background: ${({ primary }:any) => (primary ? "#01BF71" : "#010606")};
  white-space: no-wrap;
  padding: ${({ big }: any) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }:any) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }: any) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }:any) => (primary ? "#fff" : "#01BF71")};
  }
`;
