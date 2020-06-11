import React, {useEffect, useRef} from "react";
import M from "materialize-css";

export const DashboardFab = () => {
    const fab = useRef(null);
    let instance;
    useEffect(() => {
        instance = M.FloatingActionButton.init(fab.current);
    }, []);

    return (
        <div className="fixed-action-btn" ref={fab}>
            <a className="btn-floating btn-large red">
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li>
                    <button data-target="add-folder-modal" className="btn btn-floating modal-trigger">
                        <i className="material-icons">folder</i>
                    </button>
                </li>
                <button data-target="add-notebook-modal" className="btn btn-floating modal-trigger">
                    <i className="material-icons">book</i>
                </button>
            </ul>
        </div>
    );
}
