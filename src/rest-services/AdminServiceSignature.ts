import { Id, ReadonlyRecord, Timestamp } from '@zettelyay/commons'
import { MutableModel } from '@zettelyay/models'
import { UserDailyActivity } from '../UserDailyActivity'

export namespace AdminServiceSignature {
  export namespace PutUserDailyActivity {
    export interface Request {
      readonly action: UserDailyActivity.Action
    }
    export interface Response {}
  }

  export namespace GetUserDailyActivities {
    export interface Request {}
    export interface Response {
      readonly userDailyActivities: readonly UserDailyActivity[]
    }
  }

  export namespace PostDemoModeByUsername {
    export interface Request {
      readonly username: string
    }
    export interface Response {}
  }

  export namespace DeleteDemoModeByUsername {
    export interface Request {}
    export interface Response {}
  }

  export namespace GetPageData {
    export interface Request {}
    export interface Response {
      readonly pageData: PageData
    }
  }

  export namespace GetPickUserData {
    export interface Request {
      readonly deviceId: Id
      readonly userId: Id
    }
    export interface Response {
      readonly accessToken: string
      readonly refreshToken: string
    }
  }

  export interface PageData {
    readonly userDailyActivities: readonly UserDailyActivity[]
    readonly users: readonly PageData.User[]
    readonly demoModeByUsername: ReadonlyRecord<string, readonly Timestamp[]>
  }

  export namespace PageData {
    export type User = MutableModel.Entity.User & Pick<MutableModel.Entity.Account, 'pageTemplateUpvotes'>
  }
}
