import { Box, Container, Grid2, Paper, Typography } from "@mui/material";
import LogoContainer from "./logo/LogoContainer";
import LogoDynamic from '../../../assets/logo/Logo2.json';
import PerfilVideo from '../../../assets/img/Dager.webm';

const Hero = () => {
    return (
        <Paper
            id="#"
            square
            variant="even"
            sx={{
                position: "relative"
            }}
        >
            <Box
                sx={{
                    padding: {xs: "2rem 0", md: "4rem"},
                    minHeight: "80vh",
                    display: "flex",
                    alignItems: "center" 
                }}
            
            >
                <Container
                    maxWidth="xl"
                >
                    <Grid2
                        container
                    >
                        <Grid2
                            size={{
                                xs: 12,
                                md: 6,
                                lg: 7
                            }}
                        >
                            <Typography
                                variant="sobretitulo"
                            >
                                ¡Hola! Mi nombre es
                            </Typography>
                            <Box
                                sx={{
                                    position: "relative",
                                    height: {xs: "180px", md: "320px"},
                                    display: "flex"
                                }}
                            >
                                {
                                    Boolean(LogoDynamic) && <LogoContainer logo={LogoDynamic}/>
                                }
                            </Box>
                        </Grid2>
                        <Grid2
                            size={{
                                md: 6,
                                lg: 5
                            }}
                            sx={{
                                display: {xs: "none", md: "flex"},
                                justifyContent: "center"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "400px",
                                    maxHeight: "400px",
                                    borderRadius: "100%",
                                    overflow: "hidden"
                                }}
                            >
                                <video
                                    width={"100%"}
                                    height={"100%"}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={'../../../assets/img/Dager.webm'} type="video/webm" />
                                </video>
                            </Box>
                        </Grid2>
                    </Grid2>
                    <Typography
                        variant="subtitulo"
                    >
                        Soy un creador de contenido apasionado por la programación, filosofía, música, gatos y el League of Legends.
                    </Typography>
                </Container>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    display: {xs: "none", md: "flex"},
                    position: "relative"
                }}
            >
                <svg width="auto" height={"100%"} viewBox="0 0 1440 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_281)">
                    <path d="M1440 0H-65V240H1440V0Z" fill="#110f12"/>
                    <path id="path1" opacity="0.1" d="M-65 240V40.0001C-31.6743 32.4426 1.6515 24.8852 34.5495 28.0001C67.4474 31.1149 99.9176 44.9022 136.451 48.0001C172.983 51.098 213.579 43.5065 249.326 41.0001C285.072 38.4936 315.97 41.0721 351.227 40.0001C386.483 38.928 426.099 34.2055 458.615 31.0001C491.13 27.7946 516.544 26.1062 560.516 25.0001C604.487 23.894 667.015 23.3702 707.096 25.0001C747.177 26.6299 764.811 30.4134 790.969 35.0001C817.127 39.5867 851.809 44.9766 887.383 46.0001C922.957 47.0235 959.422 43.6807 993.987 41.0001C1028.55 38.3195 1061.22 36.3011 1102.16 34.0001C1143.1 31.699 1192.32 29.1152 1226.01 31.0001C1259.7 32.8849 1277.86 39.2383 1317.72 39.0001C1357.58 38.7618 1419.14 31.932 1443.14 31.0001C1467.13 30.0681 1453.57 35.0341 1440 40.0001V240H-65Z" fill="#826293">
                        <animate 
                            attributeName="d" 
                            values="
                            M-65 240V40.0001C-31.6743 32.4426 1.6515 24.8852 34.5495 28.0001C67.4474 31.1149 99.9176 44.9022 136.451 48.0001C172.983 51.098 213.579 43.5065 249.326 41.0001C285.072 38.4936 315.97 41.0721 351.227 40.0001C386.483 38.928 426.099 34.2055 458.615 31.0001C491.13 27.7946 516.544 26.1062 560.516 25.0001C604.487 23.894 667.015 23.3702 707.096 25.0001C747.177 26.6299 764.811 30.4134 790.969 35.0001C817.127 39.5867 851.809 44.9766 887.383 46.0001C922.957 47.0235 959.422 43.6807 993.987 41.0001C1028.55 38.3195 1061.22 36.3011 1102.16 34.0001C1143.1 31.699 1192.32 29.1152 1226.01 31.0001C1259.7 32.8849 1277.86 39.2383 1317.72 39.0001C1357.58 38.7618 1419.14 31.932 1443.14 31.0001C1467.13 30.0681 1453.57 35.0341 1440 40.0001V240H-65Z;
                            
                            M-25 240V40.0001C8.3257 32.4426 41.6515 24.8852 74.5495 28.0001C107.447 31.1149 139.918 44.9022 176.451 48.0001C212.983 51.098 253.579 43.5065 289.326 41.0001C325.072 38.4936 355.97 41.0721 391.227 40.0001C426.483 38.928 466.099 34.2055 498.615 31.0001C531.13 27.7946 556.544 26.1062 600.516 25.0001C644.487 23.894 707.015 23.3702 747.096 25.0001C787.177 26.6299 804.811 30.4134 830.969 35.0001C857.127 39.5867 891.809 44.9766 927.383 46.0001C962.957 47.0235 999.422 43.6807 1033.99 41.0001C1068.55 38.3195 1101.22 36.3011 1142.16 34.0001C1183.1 31.699 1232.32 29.1152 1266.01 31.0001C1299.7 32.8849 1317.86 39.2383 1357.72 39.0001C1397.58 38.7618 1459.14 31.932 1483.14 31.0001C1507.13 30.0681 1493.57 35.0341 1480 40.0001V240H-25Z;
                            
                            M-65 240V40.0001C-31.6743 32.4426 1.6515 24.8852 34.5495 28.0001C67.4474 31.1149 99.9176 44.9022 136.451 48.0001C172.983 51.098 213.579 43.5065 249.326 41.0001C285.072 38.4936 315.97 41.0721 351.227 40.0001C386.483 38.928 426.099 34.2055 458.615 31.0001C491.13 27.7946 516.544 26.1062 560.516 25.0001C604.487 23.894 667.015 23.3702 707.096 25.0001C747.177 26.6299 764.811 30.4134 790.969 35.0001C817.127 39.5867 851.809 44.9766 887.383 46.0001C922.957 47.0235 959.422 43.6807 993.987 41.0001C1028.55 38.3195 1061.22 36.3011 1102.16 34.0001C1143.1 31.699 1192.32 29.1152 1226.01 31.0001C1259.7 32.8849 1277.86 39.2383 1317.72 39.0001C1357.58 38.7618 1419.14 31.932 1443.14 31.0001C1467.13 30.0681 1453.57 35.0341 1440 40.0001V240H-65Z"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path opacity="0.2" d="M-65 240V80C-25.6524 82.6677 13.6951 85.3353 54.1458 88C94.5965 90.6648 136.15 93.3268 167.021 92C197.891 90.6733 218.079 85.3579 252.461 81C286.843 76.6422 335.421 73.2418 376.31 72C417.199 70.7583 450.4 71.6751 485.266 77C520.132 82.325 556.663 92.0581 593.437 92C630.212 91.942 667.23 82.0929 703.177 82C739.124 81.9072 774 91.5707 808.214 93C842.427 94.4293 875.979 87.6244 903.844 82C931.708 76.3757 953.885 71.9319 992.419 70C1030.95 68.0681 1085.84 68.6481 1123.32 74C1160.8 79.352 1180.87 89.4758 1213.47 87C1246.06 84.5243 1291.19 69.4489 1331.04 69C1370.9 68.5512 1405.47 82.7289 1422.76 87C1440.04 91.2711 1440.02 85.6356 1440 80V240H-65Z" fill="#826293"/>
                    <path opacity="0.3" d="M-65 240V120C-26.5936 113.146 11.8128 106.292 51.0104 105C90.208 103.708 130.197 107.98 160.75 109C191.303 110.02 212.421 107.79 249.326 108C286.231 108.21 338.923 110.86 377.094 113C415.264 115.14 438.913 116.77 473.508 117C508.103 117.23 553.643 116.059 591.87 114C630.096 111.941 661.009 108.995 698.474 114C735.939 119.005 779.956 131.963 812.917 133C845.877 134.037 867.78 123.154 903.844 118C939.908 112.846 990.132 113.42 1023.77 117C1057.41 120.58 1074.47 127.166 1109.21 125C1143.95 122.833 1196.38 111.914 1232.28 113C1268.18 114.086 1287.56 127.177 1320.85 127C1354.15 126.823 1401.36 113.378 1423.54 110C1445.72 106.622 1442.86 113.311 1440 120V240H-65Z" fill="#826293">
                        <animate 
                            attributeName="d" 
                            values="
                            M-65 240V120C-26.5936 113.146 11.8128 106.292 51.0104 105C90.208 103.708 130.197 107.98 160.75 109C191.303 110.02 212.421 107.79 249.326 108C286.231 108.21 338.923 110.86 377.094 113C415.264 115.14 438.913 116.77 473.508 117C508.103 117.23 553.643 116.059 591.87 114C630.096 111.941 661.009 108.995 698.474 114C735.939 119.005 779.956 131.963 812.917 133C845.877 134.037 867.78 123.154 903.844 118C939.908 112.846 990.132 113.42 1023.77 117C1057.41 120.58 1074.47 127.166 1109.21 125C1143.95 122.833 1196.38 111.914 1232.28 113C1268.18 114.086 1287.56 127.177 1320.85 127C1354.15 126.823 1401.36 113.378 1423.54 110C1445.72 106.622 1442.86 113.311 1440 120V240H-65Z;
                            
                            M-25 240V120C13.4064 113.146 51.8128 106.292 91.0104 105C130.208 103.708 170.197 107.98 200.75 109C231.303 110.02 252.421 107.79 289.326 108C326.231 108.21 378.923 110.86 417.094 113C455.264 115.14 478.913 116.77 513.508 117C548.103 117.23 593.643 116.059 631.87 114C670.096 111.941 701.009 108.995 738.474 114C775.939 119.005 819.956 131.963 852.917 133C885.877 134.037 907.78 123.154 943.844 118C979.908 112.846 1030.132 113.42 1063.77 117C1097.41 120.58 1114.47 127.166 1149.21 125C1183.95 122.833 1236.38 111.914 1272.28 113C1308.18 114.086 1327.56 127.177 1360.85 127C1394.15 126.823 1441.36 113.378 1463.54 110C1485.72 106.622 1482.86 113.311 1480 120V240H-25Z;
                            
                            M-65 240V120C-26.5936 113.146 11.8128 106.292 51.0104 105C90.208 103.708 130.197 107.98 160.75 109C191.303 110.02 212.421 107.79 249.326 108C286.231 108.21 338.923 110.86 377.094 113C415.264 115.14 438.913 116.77 473.508 117C508.103 117.23 553.643 116.059 591.87 114C630.096 111.941 661.009 108.995 698.474 114C735.939 119.005 779.956 131.963 812.917 133C845.877 134.037 867.78 123.154 903.844 118C939.908 112.846 990.132 113.42 1023.77 117C1057.41 120.58 1074.47 127.166 1109.21 125C1143.95 122.833 1196.38 111.914 1232.28 113C1268.18 114.086 1287.56 127.177 1320.85 127C1354.15 126.823 1401.36 113.378 1423.54 110C1445.72 106.622 1442.86 113.311 1440 120V240H-65Z"
                            dur="7s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path opacity="0.4" d="M-65 240V160C-30.7755 163.518 3.44905 167.036 37.6849 165C71.9207 162.964 106.168 155.375 146.641 153C187.113 150.625 233.812 153.464 265.003 158C296.194 162.536 311.877 168.767 347.307 169C382.737 169.233 437.914 163.466 486.049 160C534.185 156.534 575.279 155.369 599.708 158C624.138 160.631 631.902 167.058 668.687 171C705.473 174.942 771.28 176.4 808.997 172C846.715 167.6 856.343 157.342 887.383 154C918.423 150.658 970.875 154.233 1012.02 160C1053.16 165.767 1082.98 173.728 1114.7 170C1146.42 166.272 1180.02 150.857 1212.68 146C1245.35 141.144 1277.07 146.846 1320.07 153C1363.07 159.154 1417.35 165.758 1439.22 167C1461.08 168.242 1450.54 164.121 1440 160V240H-65Z" fill="#826293"/>
                    <path d="M-65 240V200C-26.9287 194.023 11.1426 188.047 47.0911 189C83.0397 189.953 116.866 197.837 149.776 202C182.687 206.163 214.682 206.605 248.542 201C282.402 195.395 318.127 183.742 352.01 187C385.894 190.258 417.936 208.428 457.047 210C496.158 211.572 542.338 196.548 581.68 195C621.021 193.453 653.525 205.382 687.5 211C721.475 216.618 756.922 215.923 798.023 210C839.125 204.077 885.88 192.924 920.305 191C954.729 189.076 976.823 196.38 1003.39 195C1029.96 193.62 1061.01 183.556 1097.46 185C1133.9 186.444 1175.74 199.398 1215.03 206C1254.32 212.603 1291.06 212.855 1332.61 209C1374.16 205.146 1420.52 197.184 1439.22 195C1457.92 192.816 1448.96 196.408 1440 200V240H-65Z" fill="#826293">
                        <animate 
                            attributeName="d" 
                            values="
                            M-65 240V200C-26.9287 194.023 11.1426 188.047 47.0911 189C83.0397 189.953 116.866 197.837 149.776 202C182.687 206.163 214.682 206.605 248.542 201C282.402 195.395 318.127 183.742 352.01 187C385.894 190.258 417.936 208.428 457.047 210C496.158 211.572 542.338 196.548 581.68 195C621.021 193.453 653.525 205.382 687.5 211C721.475 216.618 756.922 215.923 798.023 210C839.125 204.077 885.88 192.924 920.305 191C954.729 189.076 976.823 196.38 1003.39 195C1029.96 193.62 1061.01 183.556 1097.46 185C1133.9 186.444 1175.74 199.398 1215.03 206C1254.32 212.603 1291.06 212.855 1332.61 209C1374.16 205.146 1420.52 197.184 1439.22 195C1457.92 192.816 1448.96 196.408 1440 200V240H-65Z;
                            
                            M-25 240V200C12.0713 194.023 50.1426 188.047 86.0911 189C122.04 189.953 155.866 197.837 188.776 202C221.687 206.163 253.682 206.605 287.542 201C321.402 195.395 357.127 183.742 391.01 187C424.894 190.258 456.936 208.428 496.047 210C535.158 211.572 581.338 196.548 620.68 195C660.021 193.453 692.525 205.382 726.5 211C760.475 216.618 795.922 215.923 837.023 210C878.125 204.077 924.88 192.924 959.305 191C993.729 189.076 1015.82 196.38 1042.39 195C1068.96 193.62 1100.01 183.556 1136.46 185C1172.9 186.444 1214.74 199.398 1254.03 206C1293.32 212.603 1330.06 212.855 1371.61 209C1413.16 205.146 1459.52 197.184 1478.22 195C1496.92 192.816 1487.96 196.408 1480 200V240H-25Z;
                            
                            M-65 240V200C-26.9287 194.023 11.1426 188.047 47.0911 189C83.0397 189.953 116.866 197.837 149.776 202C182.687 206.163 214.682 206.605 248.542 201C282.402 195.395 318.127 183.742 352.01 187C385.894 190.258 417.936 208.428 457.047 210C496.158 211.572 542.338 196.548 581.68 195C621.021 193.453 653.525 205.382 687.5 211C721.475 216.618 756.922 215.923 798.023 210C839.125 204.077 885.88 192.924 920.305 191C954.729 189.076 976.823 196.38 1003.39 195C1029.96 193.62 1061.01 183.556 1097.46 185C1133.9 186.444 1175.74 199.398 1215.03 206C1254.32 212.603 1291.06 212.855 1332.61 209C1374.16 205.146 1420.52 197.184 1439.22 195C1457.92 192.816 1448.96 196.408 1440 200V240H-65Z"
                            dur="8s"
                            repeatCount="indefinite"
                        />
                    </path>
                    </g>
                    <defs>
                    <clipPath id="clip0_2_281">
                    <rect width="1505" height="240" fill="white" transform="translate(-65)"/>
                    </clipPath>
                    </defs>
                </svg>
            </Box>
        </Paper>
    );
};

export default Hero;