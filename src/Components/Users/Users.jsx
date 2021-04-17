import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({onPageChanged, currentPage, pageSize, totalUsersCount, users, ...props}) => {

    return <div>
        <Paginator onPageChanged={onPageChanged} currentPage={currentPage} pageSize={pageSize}
                   totalUsersCount={totalUsersCount}/>
        <div>
            {users.map(u => <User
                    user={u}
                    key={u.id}
                    unfollow={props.unfollow}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}

                />
            )
            }
        </div>
    </div>
}

export default Users;