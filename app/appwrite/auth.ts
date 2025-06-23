import { OAuthProvider, Query } from "appwrite"
import { appwriteConfig, account, database } from "./client"
import { redirect } from "react-router"

export const loginWithGoogle = async() => {
  try {
    account.createOAuth2Session(OAuthProvider.Google)
  } catch (error) {
    console.log('Error Origin: createOAuth2Session',error)
  }
}

export const getUser = async() => {
  try {
    const user = await account.get();
    
    if(!user) return redirect('/sign-in')

    const { documents } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [
        Query.equal('accountId', user.$id),
        Query.select(['name', 'email', 'imageUrl', 'joinedAt', 'accountId'])
      ]
    )
  } catch (error) {
    console.log(error)
  }
}