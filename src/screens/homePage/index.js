import * as React from "react";
import ButtonComponent from "../../components/buttons";
import Header from "../../components/header";
import BasicTextFields from "../../components/inputField";
export default function HomePage() {
  return (
    <>
      <Header />
      <BasicTextFields />
      <div>
        <ButtonComponent />
      </div>
    </>
  );
}
