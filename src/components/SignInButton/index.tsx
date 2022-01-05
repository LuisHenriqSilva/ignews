import {FaGithub} from "react-icons/fa";
import {FiX} from "react-icons/fi";
import {useSession, signIn, signOut } from "next-auth/react";

import styles from './styles.module.scss'

export function SignInButton() {
  const {data: session} = useSession()

  console.log("TESTEEEEEEEEE", session);

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="var(--green-500)"/>
        {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="var(--yellow-500)"/>
      SignIn with GitHub
    </button>
  )
}