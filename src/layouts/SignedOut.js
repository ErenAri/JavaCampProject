import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({SignedIn}) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={SignedIn} color="green">Giris Yap</Button>
        <Button color="blue" style={{marginLeft:'0.5em'}}>Kayit Ol</Button>
      </Menu.Item>
    </div>
  );
}
