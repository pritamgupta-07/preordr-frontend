"use client"
import { tokens } from "@/theme/theme";
import {
  Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    useTheme,
} from "@mui/material";

const PaymentTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Table stickyHeader>
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
                        Bank Name
                    </TableCell>
                    <TableCell
                        sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            borderBottom: `1px solid ${colors.background[700]}`,
                            padding: "16px",
                        }}
                    >
                        Account
                    </TableCell>
                    <TableCell
                        sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            borderBottom: `1px solid ${colors.background[700]}`,
                            padding: "16px",
                        }}
                    >
                        IFSC Code
                    </TableCell>
                    <TableCell
                        sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            borderBottom: `1px solid ${colors.background[700]}`,
                            padding: "16px",
                        }}
                    >
                        Action
                    </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                <TableRow>
                    <TableCell
                        sx={{
                            fontSize: "14px",
                            borderBottom: `1px solid ${colors.background[700]}`,
                            padding: "16px",
                        }}
                    >
                        State Bank of India
                    </TableCell>
                    <TableCell
                        sx={{
                            fontSize: "14px",
                            borderBottom: `1px solid ${colors.background[700]}`,
                            padding: "16px",
                        }}
                    >
                        03120098643
                    </TableCell>
                    <TableCell
                        sx={{
                            fontSize: "14px",
                            borderBottom: `1px solid ${colors.background[700]}`,
                            padding: "16px",
                        }}
                    >
                        SBI01332
                    </TableCell>
                    <TableCell
                        sx={{
                            fontSize: "14px",
                            borderBottom: `1px solid ${colors.background[700]}`,
                            padding: "16px",
                        }}
                    >
                        <Button
                            size="small"
                            sx={{
                                py: 1,
                                px: 3,
                                color: "#fff",
                                background: colors.blueAccent[500],
                                "&:hover": {
                                    background: colors.blueAccent[600],
                                },
                                "&:active": {
                                    background: "transparent",
                                    outline: `1px solid ${colors.blueAccent[500]}`,
                                    color: colors.blueAccent[500]
                                }
                            }}
                        >
                            Withdraw
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default PaymentTable;
