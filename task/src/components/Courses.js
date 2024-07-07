import React from 'react';
import { MdOutlineMan4 } from "react-icons/md";
import { SiThealgorithms } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { VscGithubProject } from "react-icons/vsc";
import { MdDataset } from "react-icons/md";
function Courses() {
    return (
        <>

            <div className="courses-all-items">

                <div className="courses-heading">
                    <h2 >My Courses</h2>
                    <h2 className="courses-heading-right">View All</h2>

                </div>
                <div className="table1">
                    <table className=" course-table-all">
                        <thead>
                            <tr>
                                <th > <h2>Course Name</h2></th>
                                <th> <h2>Start date </h2></th>
                                <th>  <h2>Lesson Complete </h2></th>
                                <th> <h2>Duration </h2></th>
                            </tr>
                        </thead>
                        <tbody className="courese-table-body">
                            <tr>

                                <td>
                                    <div className="grid">
                                        <div className="gitem1">
                                            <SiThealgorithms className=" table-icon table-icon-11" />

                                        </div>
                                        <div className="gitem2">
                                            <h2>Basic Algorithm</h2>
                                            <h4>25 Lesson</h4>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <h2>27 &nbsp; January,2023</h2>
                                </td>

                                <td>
                                    <h2>
                                        10/5 <span> (48%)</span>
                                    </h2>
                                </td>

                                <td>
                                    <h2>
                                        14h -38m-56s
                                    </h2>
                                </td>

                            </tr>

                            <tr>

                                <td>
                                    <div className="grid">
                                        <div className="gitem1">
                                            <MdOutlineDeveloperMode className=" table-icon table-icon-22"  />

                                        </div>
                                        <div className="gitem2">
                                            <h2>Web Development</h2>
                                            <h4>45 Lesson</h4>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <h2>23  &nbsp;Feb,2023</h2>
                                </td>

                                <td>
                                    <h2>
                                        40/45 <span> (97%)</span>
                                    </h2>
                                </td>

                                <td>
                                    <h2>
                                        36h -30m-00s
                                    </h2>
                                </td>

                            </tr>


                            <tr>

                                <td>
                                    <div className="grid">
                                        <div className="gitem1">
                                            <MdDataset  className=" table-icon table-icon-33" />

                                        </div>
                                        <div className="gitem2">
                                            <h2>Basic Data science</h2>
                                            <h4>37 Lesson</h4>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <h2>14 &nbsp;Jan,2023</h2>
                                </td>

                                <td>
                                    <h2>
                                        9/37 <span> (40%)</span>
                                    </h2>
                                </td>

                                <td>
                                    <h2>
                                        37h -00m-00s
                                    </h2>
                                </td>

                            </tr>



                            <tr>

                                <td>
                                    <div className="grid">
                                        <div className="gitem1">
                                            <HiOutlineDesktopComputer className=" table-icon table-icon-44" />

                                        </div>
                                        <div className="gitem2">
                                            <h2>UI/UX Design</h2>
                                            <h4>32 Lesson</h4>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <h2>19  &nbsp;Feb,2023</h2>
                                </td>

                                <td>
                                    <h2>
                                        26/32 <span> (84%)</span>
                                    </h2>
                                </td>

                                <td>
                                    <h2>
                                        16h -40m-50s
                                    </h2>
                                </td>

                            </tr>


                            <tr>

                                <td>
                                    <div className="grid">
                                        <div className="gitem1">
                                        <VscGithubProject className=" table-icon table-icon-55"  />

                                        </div>
                                        <div className="gitem2">
                                            <h2>Project Management</h2>
                                            <h4>19 Lesson</h4>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <h2>27  &nbsp;Jan,2023</h2>
                                </td>

                                <td>
                                    <h2>
                                        14/19 <span> (89%)</span>
                                    </h2>
                                </td>

                                <td>
                                    <h2>
                                        13h -20m-00s
                                    </h2>
                                </td>

                            </tr>

                            


                        </tbody>
                    </table>
                </div>
            </div>





        </>
    )
}

export default Courses;