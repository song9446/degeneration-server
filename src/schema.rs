table! {
    actions (id) {
        id -> Int4,
        name -> Text,
        description -> Text,
        duration -> Nullable<Interval>,
    }
}

table! {
    characters (id) {
        id -> Int4,
        firstname -> Text,
        surname -> Text,
        matherid -> Nullable<Int4>,
        fatherid -> Nullable<Int4>,
        ownerid -> Nullable<Int4>,
        seed -> Array<Float8>,
        url -> Text,
        jobid -> Nullable<Int4>,
        height -> Float8,
        created_at -> Timestamp,
        stats -> Array<Int4>,
        stateid -> Int4,
    }
}

table! {
    characters_traits (id) {
        id -> Int4,
        characterid -> Nullable<Int4>,
        traitid -> Nullable<Int4>,
        created_at -> Timestamp,
    }
}

table! {
    jobs (id) {
        id -> Int4,
        name -> Text,
        description -> Text,
        factors -> Nullable<Array<Int4>>,
    }
}

table! {
    states (id) {
        id -> Int4,
        name -> Text,
        description -> Text,
    }
}

table! {
    traits (id) {
        id -> Int4,
        name -> Text,
        description -> Text,
        duration -> Nullable<Interval>,
    }
}

table! {
    users (id) {
        id -> Int4,
        userid -> Text,
        password -> Text,
        email -> Text,
        nickname -> Text,
        created_at -> Timestamp,
    }
}

table! {
    users_actions (id) {
        id -> Int4,
        userid -> Int4,
        actionid -> Int4,
        created_at -> Timestamp,
    }
}

joinable!(characters -> jobs (jobid));
joinable!(characters -> states (stateid));
joinable!(characters -> users (ownerid));
joinable!(characters_traits -> characters (characterid));
joinable!(characters_traits -> traits (traitid));
joinable!(users_actions -> actions (actionid));
joinable!(users_actions -> users (userid));

allow_tables_to_appear_in_same_query!(
    actions,
    characters,
    characters_traits,
    jobs,
    states,
    traits,
    users,
    users_actions,
);