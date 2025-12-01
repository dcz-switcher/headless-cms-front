import { Box, Divider, Typography } from "mds-react";
import HeaderFragment from "./fragments/HeaderFragment";

function Component(){
    return(
        <>
            <HeaderFragment />
            <div className="mds-container">
                <div className="mds-row">
                    <div className="mds-col mds-col-md-8">
                        <Typography variant="h1" className="mds-stack-b--24">Bagde</Typography>

                        <Typography variant="body1"  className="mds-stack-b--24">Badges provide additional information such as status, state, or content category.</Typography>

                        <Divider  className="mds-stack-b--24"/>

                        <Typography variant="h2" className="mds-stack-b--16">Key Principles</Typography>
                        <Box className="mds-stack-b--48">
                            <ul className="a-list">
                                <li>
                                    <Typography>Badges can be used in tables or placed on other components.</Typography>
                                </li>
                                <li>
                                    <Typography>The text content of badges is always concise (2-3 words maximum).</Typography>
                                </li>
                                <li>
                                    <Typography>Badges are not clickable.</Typography>
                                </li>
                            </ul>
                        </Box>
                        
                        <Typography variant="h3" className="mds-stack-b--16">Size</Typography>
                        <Typography>
                            Basic badges are available in two sizes: Small and Large.
                        </Typography>
                        <Typography className="mds-stack-b--12">
                            The size should be chosen based on the available space and the component to which the badge will be affixed, regardless of breakpoints.
                        </Typography>
                        <img src="/assets/badge-illus-1.webp" width="100%"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component;