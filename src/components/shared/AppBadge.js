import React from 'react'
// ==== STYLES ====
import styles from "./appShared.module.css";

const AppBadge = ({background, title, textcolor}) => {
  return (
    <span className={`badge bg-secondary ${styles.languagesBadge}`}>{title}</span>
  )
}

export default AppBadge