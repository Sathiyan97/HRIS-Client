import React, {useState} from 'react';
import {Link,useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Container, FormControlLabel, Grid, Radio, RadioGroup, Switch, TextField} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import MUIDataTable from "mui-datatables";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import EmergencyContacts from "./EmergencyContacts";
import Dependents from "./Dependents";
import Immigration from "./Immigration";
import Job from "./Job";
import Salary from "./Salary";
import ReportTo from "./Report-to";
import Qualifications from "./Qualifications";
import Memberships from "./Memberships";

const datatableData = [
    ["Joe James", "Example Inc.", "Yonkers", "NY"],
    ["John Walsh", "Example Inc.", "Hartford", "CT"],
    ["Bob Herm", "Example Inc.", "Tampa", "FL"],
    ["James Houston", "Example Inc.", "Dallas", "TX"],
    ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
    ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
    ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
    ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
    ["Meral Elias", "Example Inc.", "Hartford", "CT"],
    ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
    ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
    ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
    ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
    ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
    ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
    ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
    ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

function TabPanel(props) {
    const location = useLocation();

    // const data = location.state.prop1;
    var empID = location.state.prop1
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >


            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Container maxWidth="sm">
                <Typography component="div" style={{
                    backgroundColor: '#cfe8fc',
                    height: '40vh',
                    marginTop: "10px",
                    marginBottom: "10px"
                }}/>
            </Container>


            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

class Col extends React.Component {
    render() {
        return null;
    }
}

Col.propTypes = {
    xs: PropTypes.number,
    children: PropTypes.node
};

class Row extends React.Component {
    render() {
        return null;
    }
}

Row.propTypes = {children: PropTypes.node};

class StyledRadio extends React.Component {
    render() {
        return null;
    }
}

export default function EmpInfo() {
    const location = useLocation();

   let empID = location.state.prop1;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let [showForm, setShowForm] = useState(false);
    let [showForm2, setShowForm2] = useState(false);
    let [showForm3, setShowForm3] = useState(false);
    let [showForm4_1, setShowForm4_1] = useState(false);
    let [showForm4_2, setShowForm4_2] = useState(false);
    let [showForm4_3, setShowForm4_3] = useState(false);
    let [showForm4_4, setShowForm4_4] = useState(false);
    let [showForm4_5, setShowForm4_5] = useState(false);
    let [showForm4_6, setShowForm4_6] = useState(false);
    let [showForm5, setShowForm5] = useState(false);

    let showF = () => {
        setShowForm(!showForm);
    }
    let showF2 = () => {
        setShowForm2(!showForm2);
    }
    let showF3 = () => {
        setShowForm3(!showForm3);
    }
    let showF4_1 = () => {
        setShowForm4_1(!showForm4_1);
    }
    let showF4_2 = () => {
        setShowForm4_2(!showForm4_2);

    }
    let showF4_3 = () => {
        setShowForm4_3(!showForm4_3);
    }
    let showF4_4 = () => {
        setShowForm4_4(!showForm4_4);
    }
    let showF4_5 = () => {
        setShowForm4_5(!showForm4_5);
    }
    let showF4_6 = () => {
        setShowForm4_6(!showForm4_6);
    }
    let showF5 = () => {
        setShowForm5(!showForm5);
    }


    return (

        <div className={classes.root}>

            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >

                    <Tab label="Personal Details" {...a11yProps(0)} />
                    <Tab label="Contact Details" {...a11yProps(1)} />
                    <Tab label="Emergency Contacts" {...a11yProps(2)} />
                    <Tab label="Dependents" {...a11yProps(3)} />
                    <Tab label="Immigration" {...a11yProps(4)} />
                    <Tab label="Job" {...a11yProps(5)} />
                    <Tab label="Salary" {...a11yProps(6)} />
                    <Tab label="Report to" {...a11yProps(7)} />
                    <Tab label="Qualifications" {...a11yProps(8)} />
                    <Tab label="Memberships" {...a11yProps(9)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} props={empID} index={0}>
                <PersonalDetails value={value} props={empID} handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} props={empID} index={1}>
                <ContactDetails value={value} props={empID} handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} props={empID} index={2}>
                <EmergencyContacts value={value} props={empID} handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} props={empID} index={3}>
                <Dependents value={value} props={empID} handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} props={empID} index={4}>
                <Immigration value={value} props={empID} handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} props={empID} index={5}>
                <Job value={value} props={empID} handleChange={handleChange}/>

            </TabPanel>
            <TabPanel value={value} props={empID} index={6}>
                <Salary value={value} props={empID} handleChange={handleChange}/>

            </TabPanel>
            <TabPanel value={value} props={empID} index={7}>
                <ReportTo value={value} props={empID} handleChange={handleChange}/>

            </TabPanel>
            <TabPanel value={value} props={empID} index={8}>
                <Qualifications value={value} props={empID} handleChange={handleChange}/>

            </TabPanel>
            <TabPanel value={value} props={empID} index={9}>
                <Memberships value={value} props={empID} handleChange={handleChange}/>

            </TabPanel>
        </div>
    );
}
