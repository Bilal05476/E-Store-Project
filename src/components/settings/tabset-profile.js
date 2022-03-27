import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Settings } from "react-feather";
import { Button, Col, Input, Label, Row, Table } from "reactstrap";

const TabsetProfile = () => {
	return (
		<div>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">
						<User className="mr-2" />
						Profile
					</Tab>
					<Tab className="nav-link">
						<Settings className="mr-2" />
						Contact
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
										<td>2124821463</td>
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
				<TabPanel>
				
					
					<div className="account-setting deactivate-account">
						<h5 className="f-w-600 f-16">Deactivate Account</h5>
						<Row>
							<Col>
								<Label className="d-block">
									<Input
										className="radio_animated"
										id="edo-ani"
										type="radio"
										name="rdo-ani"
										defaultChecked
									/>
									I have a privacy concern
								</Label>
								<Label className="d-block">
									<Input
										className="radio_animated"
										id="edo-ani1"
										type="radio"
										name="rdo-ani"
									/>
									This is temporary
								</Label>
								<Label className="d-block mb-0">
									<Input
										className="radio_animated"
										id="edo-ani2"
										type="radio"
										name="rdo-ani"
										defaultChecked
									/>
									Other
								</Label>
							</Col>
						</Row>
						<Button type="button" color="primary">
							Deactivate Account
						</Button>
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default TabsetProfile;
