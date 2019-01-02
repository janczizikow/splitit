import React, { useState, useRef } from "react";
import { Mutation, MutationFn } from "react-apollo";
import gql from "graphql-tag";

import ErrorMessage from "../ErrorMessage";
import Avatar from "../../styles/Avatar";
import Button from "../../styles/Button";
import Flex from "../../styles/Flex";
import Box from "../../styles/Box";
import { CURRENT_USER_QUERY } from "../User";

export const UPDATE_AVATAR_MUTATION = gql`
  mutation updateAvatar($avatar: String) {
    updateUser(avatar: $avatar) {
      id
      avatar
    }
  }
`;

interface Props {
  avatar: string | null;
}

const AvatarUploader: React.FunctionComponent<Props> = props => {
  const [file, setFile] = useState<string | Blob>("");
  const [avatar, setAvatar] = useState(props.avatar);
  const inputRef = useRef<HTMLInputElement>(null);

  const reset = (avatarURL: string) => {
    setFile("");
    setAvatar(avatarURL);
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length) {
      setFile(files[0]);
      setAvatar(URL.createObjectURL(files[0]));
    } else {
      // TODO: Validation
    }
  };

  const handleDelete = () => {
    if (confirm("Deleting avatar. Continue?")) {
      reset("");
    }
  };

  const uploadFile = async (e: React.SyntheticEvent, mutation: MutationFn) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "splitit");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/shanlongjj/image/upload/",
      {
        method: "POST",
        body: data
      }
    );
    const avatarURL = await res.json();

    mutation({ variables: { avatar: avatarURL.secure_url } });
    reset(avatarURL.secure_url);
  };

  return (
    <Mutation
      mutation={UPDATE_AVATAR_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(updateAvatar, { loading, error }) => (
        <>
          <ErrorMessage error={error} />
          <form
            noValidate
            onSubmit={e => uploadFile(e, updateAvatar)}
            style={{ marginBottom: 32 }}
          >
            <Flex alignItems="center">
              {avatar && <Avatar src={avatar} alt="avatar" />}
              <Box mx={16}>
                <input type="file" ref={inputRef} onChange={handleChange} />
                <Button type="submit" disabled={loading}>
                  Upload
                </Button>
              </Box>
              {avatar && (
                <Button type="button" onClick={handleDelete}>
                  Delete
                </Button>
              )}
            </Flex>
          </form>
        </>
      )}
    </Mutation>
  );
};

export default AvatarUploader;
