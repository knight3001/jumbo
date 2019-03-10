// @flow

export const getMovieRuntime = (length: number): string => {
  const hour = 60;
  return (parseInt(length / hour)).toString() + "h " + (length % hour).toString() + "min";
};
