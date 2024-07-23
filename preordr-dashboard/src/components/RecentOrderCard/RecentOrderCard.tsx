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
    useTheme
} from "@mui/material";
import recentOrders from "./RecentOrderData.js";

const RecentOrderCard = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            sx={{
                background: colors.surface[500],
                padding: "10px",
                borderRadius: "8px",
                height: "250px",
            }}
        >
            <Typography variant="h3" fontWeight={800} marginBottom={1.5}>
                Recent Orders
            </Typography>

            <TableContainer
                sx={{ width: "100%", maxHeight: "200px", overflow: "auto",
                    borderRadius: "6px 6px 0 0"
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
                                    padding: "16px",
                                }}
                            >
                                Order No.
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    borderBottom: `1px solid ${colors.background[700]}`,
                                    padding: "16px",
                                }}
                            >
                                Items
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    borderBottom: `1px solid ${colors.background[700]}`,
                                    padding: "16px",
                                }}
                            >
                                Amount
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    borderBottom: `1px solid ${colors.background[700]}`,
                                    padding: "16px",
                                }}
                            >
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Table Body */}
                    <TableBody>
                        {recentOrders.map((data) => (
                            <TableRow key={data.orderNumber}>
                                <TableCell
                                    sx={{
                                        fontSize: "14px",
                                        borderBottom: `1px solid ${colors.background[600]}`,
                                        padding: "16px",
                                    }}
                                >
                                    #{data.orderNumber}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "14px",
                                        borderBottom: `1px solid ${colors.background[600]}`,
                                        padding: "16px",
                                    }}
                                >
                                    {data.item}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "14px",
                                        borderBottom: `1px solid ${colors.background[600]}`,
                                        padding: "16px",
                                    }}
                                >
                                    Rs. {data.amount}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: "14px",
                                        borderBottom: `1px solid ${colors.background[600]}`,
                                        padding: "16px",
                                    }}
                                >
                                    {data.status}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default RecentOrderCard;
