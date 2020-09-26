import React, {useEffect, useRef, useState} from "react";
import M from "materialize-css";
import {useDispatch, useSelector} from "react-redux";
import {addFolder, selectAddFolder} from "./AddFolderSlice";
import {login} from "../login/LoginSlice";
import {Link, Redirect} from "react-router-dom";

export const AddFolder = ({open}) => {
    const dispatch = useDispatch();
    const addFolderData = useSelector(selectAddFolder)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    let instance;
    const Modal = useRef();
    const NameTextbox = useRef();

    useEffect(() => {
        instance = M.Modal.init(Modal.current, {});
    }, []);

    useEffect(() => {
        if (open) {
            showModal();
        } else {
            hideModal();
        }
    }, [open]);

    const showModal = () => {
        instance && instance.open();
    }

    const hideModal = () => {
        instance && instance.close();
    };

    return (
        <div>
            <div id="add-folder-modal" className={'modal'} ref={Modal}>
                <div className="modal-content">
                    <h4>New Folder</h4>
                    <div className={'input-field col s12'}>
                        <input name={'name'} type={'text'} value={name}
                               onChange={e => setName(e.target.value)} ref={NameTextbox}/>
                        <label htmlFor={'name'}>Name</label>
                    </div>
                    <div className={'input-field col s12'}>
                        <input name={'description'} type={'text'} value={description}
                               onChange={e => setDescription(e.target.value)}/>
                        <label htmlFor={'description'}>Description</label>
                    </div>

                    <div className={'center-align'}>
                        {addFolderData.loading ? (<div>loading</div>) : (<div></div>)}
                        {addFolderData.hasError ? (<div className={'red-text'}>{addFolderData.error.message}</div>) : (
                            <div></div>)}
                    </div>

                </div>
                <div className="modal-footer">
                    <button type={'submit'} className={'btn btn-flat waves-effect waves-light'}
                            onClick={() => dispatch(addFolder({name, description}))}>Add
                    </button>
                </div>
            </div>
        </div>
    );
}
