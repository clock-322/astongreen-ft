import React from 'react'
import "./Table.scss";
import { clsx } from '../../../utils/utils';
import { NoRecordIcon } from '../../../assets/icons/icons';

const Table = ({ className, children, fields }) => {
    return (
        <div className={clsx("custom_table", className)}>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            {
                                fields.map(item => (
                                    <th key={item}>
                                        {item}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            children ||
                            <tr>
                                <td colSpan={fields.length}>
                                    <div className="no_record_found">
                                        <NoRecordIcon />
                                        <h3>No Record Found</h3>
                                    </div>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table