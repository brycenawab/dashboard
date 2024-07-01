import {Box , Typography} from "@mui/material"
import {Menu , MenuItem , Sidebar } from "react-pro-sidebar"
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function SideNav (){
    return (
        <Sidebar>
<Menu>
    <MenuItem active icon={<HomeIcon/>}>
    <Typography variant="body2">Dashboard</Typography>
    </MenuItem>

    <MenuItem active icon={<QuestionMarkIcon/>}>
    <Typography variant="body2">FAQ page</Typography>
    </MenuItem>
</Menu>
        </Sidebar>
    )
}