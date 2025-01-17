import MenuDetailsCard from "@/components/MenuDetails/MenuDetailsCard/MenuDetailsCard";
import { Box } from "@mui/material";

const MenuDetails = () => {
    return (
        <>
            {/* MENU DETAILS CONTENT */}
            <Box sx={{ margin: "16px 0", width: "100%" }}>
                <MenuDetailsCard />
                <MenuDetailsCard />
                <MenuDetailsCard />
            </Box>
        </>
    );
};

export default MenuDetails;
