import React from 'react';
import './LandingPage.css';
import {DashboardFab} from "../components/dashboard-fab";
import {Sidebar} from '../components/sidebar';
import {FolderList} from '../components/folder-list';
import {NotebookList} from "../components/notebok-list";
import {AddFolder} from "../components/add-folder";


export const LandingPage = () => {
    return (<div>
        <DashboardFab></DashboardFab>
        <AddFolder></AddFolder>
        <div className={'sidebar'}>
            <Sidebar></Sidebar>
        </div>
        <div className={'content'}>
            <FolderList></FolderList>
            <NotebookList></NotebookList>
        </div>
    </div>);
}
