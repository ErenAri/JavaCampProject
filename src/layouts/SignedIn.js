import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({SignedOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        />

        <Dropdown pointing="top left" text="Eren">
          <Dropdown.Menu>
            <Dropdown.Item  text="Bilgilerim" icon="info/" />
            <Dropdown.Item onClick={SignedOut} text="Çıkış Yap" icon="signOut" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
