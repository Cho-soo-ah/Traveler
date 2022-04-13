import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./components.css";

const GET_ROLES = gql`
  query GetRoles {
    roles {
      id
    }
  }
`;
const GET_ROLE = gql`
  query GetRole($id: ID!) {
    role(id: $id) {
      id
      requirement
      members {
        id
        last_name
        serve_years
      }
      equipments {
        id
      }
      softwares {
        id
      }
    }
  }
`;

function SideBar() {
  // const [contentId, setContentId] = useState("");

  function AsideItems() {
    // const roleIcons = {
    //   developer: "💻",
    //   designer: "🎨",
    //   planner: "📝",
    // };
    // const { loading, error, data } = useQuery(GET_ROLES);
    // if (loading) return <p className="loading">Loading...</p>;
    // if (error) return <p className="error">Error :(</p>;

    return (
      <ul>
        {/* {data.roles.map(({ id }) => {
          return (
            <li
              key={id}
              className={"roleItem " + (contentId === "id" ? "on" : "")}
              onClick={() => {
                setContentId(id);
              }}
            >
              <span>{contentId === id ? "🔲" : "⬛"}</span>
              {roleIcons[id]} {id}
            </li>
          );
        })} */}
        <li>login / sign in</li>
        <li>Check List for travel</li>
        <li>mypage </li>
      </ul>
    );
  }

  return <aside>{AsideItems()}</aside>;
}

export default SideBar;
