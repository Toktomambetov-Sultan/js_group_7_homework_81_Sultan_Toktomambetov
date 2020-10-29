import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOriginalLink } from "../../store/actions";

const RedirectPage = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOriginalLink(props.match.params.id));
      console.log(1);
      if (state.currentLink.originalUrl) {
        window.location.href = state.currentLink.originalUrl;
      } else {
        props.history.push({ pathname: "/" });
      }
    };
    run();
  });
  return <></>;
};

export default RedirectPage;
