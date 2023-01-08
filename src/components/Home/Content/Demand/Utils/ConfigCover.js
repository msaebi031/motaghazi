import {
  ApartmentRounded,
  QuestionMarkRounded,
  MedicalServicesRounded,
  EmojiObjectsRounded,
  GamepadRounded,
  PlayCircleRounded,
  LaptopMacRounded,
  MobileScreenShareRounded,
} from "@mui/icons-material";

export const configCover = (value) => {
  switch (value) {
    case "6352db44f805b1bbeb76b139":
      return <ApartmentRounded />;
    case "b7hwo":
      return <QuestionMarkRounded />;
    case "tlbtp":
      return <MedicalServicesRounded />;
    case "gwg0g":
      return <EmojiObjectsRounded />;
    case "60f293ef3aa9745f9ffb1384":
      return <GamepadRounded />;
    case "qhwlv":
      return <PlayCircleRounded />;
    case "vqjyc":
      return <LaptopMacRounded />;
    case "jfh5y":
      return <MobileScreenShareRounded />;
    default:
      return null;
  }
};
