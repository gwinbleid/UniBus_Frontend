import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import CommuteIcon from '@material-ui/icons/DirectionsCar';

export const mailFolderListItems = (
    <div>
      <Link to='/table'>
      <ListItem button>
        <ListItemIcon>
          <CommuteIcon />
        </ListItemIcon>
        <ListItemText primary="Список транспортных средств" />
      </ListItem>
      </Link>
      
      <Link to='/datagrid'>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Создание DataGrid" />
      </ListItem>
      </Link>

      <Link to='/'>
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Jбратно в Меню" />
      </ListItem>
      </Link>

      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="DIch map" />
      </ListItem>

    </div>
  );
  
  export const otherMailFolderListItems = (
    <div>
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="All DIch" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Trash DIch" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="DIch" />
      </ListItem>
    </div>
  );