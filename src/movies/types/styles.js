// @flow

export const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "calc(100% - 30px)"
};
export const container = {
  ...conatinerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  },
  "@media (min-width: 1600px)": {
    maxWidth: "1520px"
  }
};

export const title = {
  fontFamily: "Montserrat",
  color: "#E3F4FC",
  fontSize: "1.25rem",
  fontWeight: "bold",
  lineHeight: "24px"
};
