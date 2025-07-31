import { useState, type SetStateAction } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch } from "../app/hook";
import { useLoginMutation } from "../features/services/usersApi";
import { setItemToStorage } from "../utils/secureStorage";
import { updateAuth } from "../features/slices/authSlice";

const ModalScreen = (props: any) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  //useAuthentication();

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setError("");
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setError("");
    setPassword(e.target.value);
  };

  const loginHandle = async () => {
    if (!username || !password) {
      setError("Enter both fields!!");
      return;
    }

    const tokens = await login({
      email: username,
      password: password,
    }).unwrap();

    const { access_token, refresh_token } = tokens;

    const tokenWithExpiry = {
      accessToken: access_token,
      refreshToken: refresh_token,
      isAuthenticated: true,
      expiresIn: (Date.now() + 1 * 60 * 60 * 1000).toString(),
    };

    setItemToStorage("TOKEN", JSON.stringify(tokenWithExpiry));

    dispatch(
      updateAuth({
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresIn: tokenWithExpiry.expiresIn.toString(),
        isAuthenticated: true,
      })
    );

    props.onHide();
  };
  return (
    <Modal
      {...props}
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Login Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <label
              htmlFor="exampleFormControlInput1"
              className="col-sm-2 col-form-label"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                data-testid="username"
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                value={username}
                placeholder="john@mail.com"
                onChange={handleEmailChange}
              />
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>

            <input
              data-testid="password"
              type="password"
              className="form-control"
              id="inputPassword"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={loginHandle}>Submit</Button>
      </Modal.Footer>
      <div className="d-flex flex-row justify-content-center">{error}</div>
    </Modal>
  );
};

export default ModalScreen;
