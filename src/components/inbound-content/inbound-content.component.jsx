import React, { Fragment, useState } from "react";
import ShipmentTableStack from "../shipment-table-stack/shipment-table-stack.component";
import CustomizedSearchField from "../UI/searchfield/searchfield.component";
import { Container, SwitchLabel, SwitchValue } from "./inbound-content.styles";
import Dropdown from "../UI/dropdown/dropdown.component";
import CheckInTable from "../UI/check-in-table/check-in-table.component";
import { checkInTableData } from "../../constants";
import Switch from "../UI/switch/switch.component";
import Stack from "@mui/material/Stack";
import DeletableChip from "../UI/chip/chip.component";
import CompletedPOS from "../completed-pos/completed-pos.component";
import CheckIn from "../check-in/check-in.component";

const InboundContent = ({ content }) => {
  const [userNameFilter, setUserNameFilter] = useState("");
  const [vendorFilter, setVendorFilter] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserNameFilterChange = (event) => setUserNameFilter(event.target.value);
  const handleVendorFilterChange = (event) => setVendorFilter(event.target.value);

  const isUserNameFilterEmpty = userNameFilter.trim() === "";
  const isVendorFilterEmpty = vendorFilter.trim() === "";

  const handleUserNameInputClear = () => {
    setUserNameFilter("");
  };
  const handleVendorInputClear = () => {
    setVendorFilter("");
  };
  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  const handleOpenModal = (user) => {
    setIsModalOpen(true);
    setSelectedUser(user);
    //console.log(user);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const completedPOS = 30;

  switch (content) {
    case 1:
      return (
        <Container>
          <Stack direction="row" spacing="16px" alignItems="center">
            <Fragment>
              <Stack direction="row" spacing="10px" alignItems="center">
                <div style={{ width: "320px" }}>
                  <CustomizedSearchField
                    placeholder="Search by Invoice#, PO#, Order ID, Tracking"
                    ariaLabel="Search by invoice#, PO #, Order ID, Tracking"
                    disabled={isSwitchOn}
                  />
                </div>
                <div style={{ width: "150px" }}>
                  <CustomizedSearchField
                    placeholder="Vendor Adress"
                    ariaLabel="Vendor Adress"
                    value={vendorFilter}
                    onChange={handleVendorFilterChange}
                    disabled={isSwitchOn}
                  />
                </div>
                <div style={{ width: "150px" }}>
                  <CustomizedSearchField
                    placeholder="Filter by user"
                    ariaLabel="Filter by user"
                    value={userNameFilter}
                    onChange={handleUserNameFilterChange}
                    disabled={isSwitchOn}
                  />
                </div>
              </Stack>
            </Fragment>
            <Fragment>
              <Stack direction="row" spacing="12px" alignItems="center">
                <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
                <SwitchLabel>
                  Show Completed PO's <SwitchValue>({completedPOS})</SwitchValue>
                </SwitchLabel>
              </Stack>
            </Fragment>
          </Stack>
          <Fragment>
            {(!isUserNameFilterEmpty || !isVendorFilterEmpty) && (
              <Stack
                sx={{ marginTop: "10px", marginBottom: "-12px" }}
                direction="row"
                spacing="10px"
                alignItems="center"
              >
                {!isUserNameFilterEmpty && (
                  <DeletableChip
                    value={userNameFilter}
                    filterType="userName"
                    onDelete={handleUserNameInputClear}
                    clearInput={handleUserNameInputClear}
                  />
                )}
                {!isVendorFilterEmpty && (
                  <DeletableChip
                    value={vendorFilter}
                    filterType="vendor"
                    onDelete={handleVendorInputClear}
                    clearInput={handleVendorInputClear}
                  />
                )}
              </Stack>
            )}
          </Fragment>
          {isSwitchOn ? (
            <CompletedPOS />
          ) : (
            <>
              <CheckInTable
                data={checkInTableData}
                userNameFilter={userNameFilter.toLowerCase()}
                vendorFilter={vendorFilter.toLowerCase()}
                onOpenModal={handleOpenModal}
              />
              <CheckIn open={isModalOpen} onClose={handleCloseModal} user={selectedUser}/>
            </>
          )}
        </Container>
      );
    case 2:
      return (
        <Container>
          <Stack direction="row" spacing="24px" alignItems="center">
            <div style={{ flex: 2 }}>
              <CustomizedSearchField
                placeholder="Search by invoice#, PO#, Order ID, Tracking"
                ariaLabel="Search by invoice#, PO#, Order ID, Tracking"
              />
            </div>

            <div style={{ flex: 1 }}>
              <Dropdown />
            </div>
          </Stack>
          <ShipmentTableStack />
        </Container>
      );
    case 3:
      return <div>3</div>;
    default:
      return null;
  }
};

export default InboundContent;
