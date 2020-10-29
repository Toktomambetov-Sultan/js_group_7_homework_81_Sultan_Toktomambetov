import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentLink, shortenLink } from "../../store/actions";
import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const shortenLinkHandler = (link) => dispatch(shortenLink(link));

  const shortUrlInput = useRef(null);

  const changeCurrentLinkHandler = ({ name, value }) =>
    dispatch(changeCurrentLink({ name, value }));

  const onChange = (event) => {
    const { name, value } = event.target;
    changeCurrentLinkHandler({ name: "shortUrl", value: "" });
    changeCurrentLinkHandler({ name, value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    shortenLinkHandler(state.currentLink.originalUrl);
  };
  return (
    <Box mt="30vh">
      <Backdrop className={classes.backdrop} open={state.isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container maxWidth="md">
        <form onSubmit={onSubmit}>
          <TextField
            onChange={onChange}
            fullWidth
            value={state.currentLink.originalUrl}
            margin="normal"
            name="originalUrl"
            required
            label="Original url link"
          />
          <Box marginTop={3} textAlign="center">
            <Button type="submit" color="primary" variant="contained">
              shorten
            </Button>
          </Box>
        </form>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={10}>
            <TextField
              margin="dense"
              variant="filled"
              name="shortUrl"
              disabled
              fullWidth
              inputRef={shortUrlInput}
              value={"http://localhost:3000/" + state.currentLink.shortUrl}
              label="short url link"
            />
          </Grid>
          <Grid item xs={2}>
            <CopyToClipboard text={shortUrlInput.current?.value}>
              <Button fullWidth color="primary" variant="outlined">
                Copy
              </Button>
            </CopyToClipboard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
