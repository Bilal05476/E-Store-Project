import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User } from "react-feather";
import { Table } from "reactstrap";

const TabsetProfile = () => {
  return (
    <div>
      <Tabs>
        <TabList className="nav nav-tabs tab-coupon">
          <Tab className="nav-link">
            <User className="mr-2" />
            Profile
          </Tab>
        </TabList>

        <TabPanel>
          <div className="tab-pane fade show active">
            <h5 className="f-w-600 f-16">Profile</h5>
            <div className="table-responsive profile-table">
              <Table className="table-responsive">
                <tbody>
                  <tr>
                    <td>Full Name:</td>
                    <td>Bilal Ahmed</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>storemanager@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td>Mobile Number:</td>
                    <td>+92 312 0000 705</td>
                  </tr>
                  <tr>
                    <td>DOB:</td>
                    <td>Jan, 20 2000</td>
                  </tr>
                  <tr>
                    <td>Location:</td>
                    <td>PK</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsetProfile;
