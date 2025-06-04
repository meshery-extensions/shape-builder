import React from "react";
import { Modal, ModalBody, Typography, List, ListItem, ListItemText, ModalFooter } from "@sistent/sistent";

const instructionPoints = [
  {
    primary: "Press ENTER to close the shape",
    secondary: "It won’t draw the last position of your cursor, don’t stress!"
  },
  {
    primary: "Hold CTRL to snap to grid",
    secondary: "Snap to Grid is default, CTRL allows you to freely draw with precision"
  },
  {
    primary: "CTRL + Z to undo",
    secondary: "Undo the last point you placed"
  },
  {
    primary: "Maximize for better visibility",
    secondary: "Without maximize, it may appear tiny"
  },
];

const InstructionsModal = ({ open, onClose }) => {

  return (
    <Modal
      open={open}
      closeModal={onClose}
      title="ShapeBuilder Instructions"
      maxWidth="sm"
    >
      <ModalBody>
        <List>
          {instructionPoints.map(({ primary, secondary }, idx) => (
            <ListItem key={idx}>
              <ListItemText
                primary={<Typography fontWeight="bold" color="text.primary">{primary}</Typography>}
                secondary={<Typography variant="body2" color="text.secondary">{secondary}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </ModalBody>
      <ModalFooter variant="filled" helpText={"Refer to: https://docs.meshery.io/extensions/component-shape-guide"}>
      </ModalFooter>
    </Modal>
  );
};

export default InstructionsModal;
