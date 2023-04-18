import moment from "moment-timezone";

export const logger = (...logs) =>
  process.env.NODE_ENV === "development"
    ? // eslint-disable-next-line no-console
      console.log(...logs, `(Log time - ${moment().format("LLL")})`)
    : undefined;

export const camelCaseToTitleCase = (str) => {
  let newStr = str?.replace(/([A-Z])/g, " $1");
  return newStr?.charAt(0)?.toUpperCase() + newStr?.slice(1);
};

export const capitalize = (word)=> {
  return word.charAt(0).toUpperCase() + word.slice(1);
}