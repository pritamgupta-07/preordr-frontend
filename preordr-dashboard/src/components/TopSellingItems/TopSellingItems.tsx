import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { tokens } from "@/theme/theme";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme,
} from "@mui/material";
import topSelling from "./TopSellingData.js";

const TopSellingItems = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            sx={{
                width: "100%",
                background: colors.surface[500],
                height: "250px",
                borderRadius: "8px",
                padding: "10px",
            }}
        >
            <Typography
                variant="h1"
                sx={{ fontSize: "24px", marginBottom: "12px" }}
                fontWeight={800}
                color={colors.textPrimary[500]}
            >
                Top selling Items
            </Typography>

            <TableContainer
                sx={{
                    width: "100%",
                    maxHeight: "200px",
                    overflow: "auto",
                    borderRadius: "6px 6px 0 0",
                }}
            >
                <Table stickyHeader>
                    {/* Table Heading */}
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    borderBottom: `1px solid ${colors.background[700]}`,
                                    padding: "12px",
                                }}
                            >
                                Items Name
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    borderBottom: `1px solid ${colors.background[700]}`,
                                    padding: "12px",
                                }}
                            >
                                Increased By (%)
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Table Body */}

                    <TableBody>
                        {topSelling.map((data, index) => {
                            return (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontSize: "14px", }}>
                                            {data.itemName}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: colors.secondary[500],
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 -960 960 960"
                                                width="24px"
                                                fill={colors.secondary[500]}
                                            >
                                                <path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z" />
                                            </svg>
                                            {data.increasedPercentage} %
                                        </TableCell>
                                    </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TopSellingItems;
