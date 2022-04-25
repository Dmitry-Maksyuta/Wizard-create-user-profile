import {ListItem} from "../../../redux/listVM/types";

export interface StateProps {
    list: ListItem[]
}

export interface DispatchProps {
    deleteVM: () => void
    selectedAll: (state: boolean) => void
    changeActive: (index: number) => void
    changeSelect: (index: number) => void
}

export interface MyProps {
    toggle: () => void
}

export interface MyState {
    allSelected: boolean,
    visibilityBtn: boolean
}

export type Props = StateProps & DispatchProps & MyProps
