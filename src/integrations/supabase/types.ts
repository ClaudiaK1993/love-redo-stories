export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      app_ratings: {
        Row: {
          created_at: string
          feedback: string | null
          id: string
          rating: number
          user_id: string
        }
        Insert: {
          created_at?: string
          feedback?: string | null
          id?: string
          rating: number
          user_id: string
        }
        Update: {
          created_at?: string
          feedback?: string | null
          id?: string
          rating?: number
          user_id?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          buyer_id: string
          created_at: string
          id: string
          listing_id: string
          seller_id: string
          updated_at: string
        }
        Insert: {
          buyer_id: string
          created_at?: string
          id?: string
          listing_id: string
          seller_id: string
          updated_at?: string
        }
        Update: {
          buyer_id?: string
          created_at?: string
          id?: string
          listing_id?: string
          seller_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversations_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      escrow_transactions: {
        Row: {
          amount: number
          created_at: string
          id: string
          order_id: string
          payfast_payment_id: string | null
          payfast_reference: string | null
          refunded_at: string | null
          released_at: string | null
          status: Database["public"]["Enums"]["payment_status"]
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          order_id: string
          payfast_payment_id?: string | null
          payfast_reference?: string | null
          refunded_at?: string | null
          released_at?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          order_id?: string
          payfast_payment_id?: string | null
          payfast_reference?: string | null
          refunded_at?: string | null
          released_at?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "escrow_transactions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "escrow_transactions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_safe"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          id: string
          listing_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          listing_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          listing_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorites_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      flagged_listings: {
        Row: {
          admin_notes: string | null
          category_detected: string | null
          category_selected: string | null
          created_at: string
          flag_reason: string
          id: string
          image_url: string
          listing_id: string | null
          review_decision: string | null
          reviewed_at: string | null
          reviewed_by: string | null
        }
        Insert: {
          admin_notes?: string | null
          category_detected?: string | null
          category_selected?: string | null
          created_at?: string
          flag_reason: string
          id?: string
          image_url: string
          listing_id?: string | null
          review_decision?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
        }
        Update: {
          admin_notes?: string | null
          category_detected?: string | null
          category_selected?: string | null
          created_at?: string
          flag_reason?: string
          id?: string
          image_url?: string
          listing_id?: string | null
          review_decision?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flagged_listings_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      listing_likes: {
        Row: {
          created_at: string
          id: string
          is_like: boolean
          listing_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_like?: boolean
          listing_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_like?: boolean
          listing_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "listing_likes_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      listing_views: {
        Row: {
          created_at: string
          id: string
          listing_id: string
          session_id: string | null
          viewer_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          listing_id: string
          session_id?: string | null
          viewer_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          listing_id?: string
          session_id?: string | null
          viewer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "listing_views_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      listings: {
        Row: {
          boost_expires_at: string | null
          boost_type: string | null
          brand: string | null
          category: string
          condition: string | null
          created_at: string
          description: string | null
          id: string
          images: string[] | null
          is_boosted: boolean | null
          listing_reference: string | null
          moderation_status: string | null
          platform: string
          price: number
          seller_id: string
          sold_at: string | null
          status: Database["public"]["Enums"]["listing_status"]
          subcategory: string | null
          title: string
          updated_at: string
        }
        Insert: {
          boost_expires_at?: string | null
          boost_type?: string | null
          brand?: string | null
          category: string
          condition?: string | null
          created_at?: string
          description?: string | null
          id?: string
          images?: string[] | null
          is_boosted?: boolean | null
          listing_reference?: string | null
          moderation_status?: string | null
          platform?: string
          price: number
          seller_id: string
          sold_at?: string | null
          status?: Database["public"]["Enums"]["listing_status"]
          subcategory?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          boost_expires_at?: string | null
          boost_type?: string | null
          brand?: string | null
          category?: string
          condition?: string | null
          created_at?: string
          description?: string | null
          id?: string
          images?: string[] | null
          is_boosted?: boolean | null
          listing_reference?: string | null
          moderation_status?: string | null
          platform?: string
          price?: number
          seller_id?: string
          sold_at?: string | null
          status?: Database["public"]["Enums"]["listing_status"]
          subcategory?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          is_inquiry: boolean
          sender_id: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          is_inquiry?: boolean
          sender_id: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          is_inquiry?: boolean
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          listing_id: string | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          listing_id?: string | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          listing_id?: string | null
          message?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          buyer_confirmed_at: string | null
          buyer_id: string
          courier_id: string | null
          created_at: string
          delivered_at: string | null
          id: string
          item_price: number
          listing_id: string | null
          order_number: string
          seller_id: string
          service_fee: number
          shipped_at: string | null
          shipping_address: Json | null
          shipping_cost: number
          status: Database["public"]["Enums"]["order_status"]
          total_amount: number
          tracking_number: string | null
          updated_at: string
        }
        Insert: {
          buyer_confirmed_at?: string | null
          buyer_id: string
          courier_id?: string | null
          created_at?: string
          delivered_at?: string | null
          id?: string
          item_price: number
          listing_id?: string | null
          order_number: string
          seller_id: string
          service_fee?: number
          shipped_at?: string | null
          shipping_address?: Json | null
          shipping_cost?: number
          status?: Database["public"]["Enums"]["order_status"]
          total_amount: number
          tracking_number?: string | null
          updated_at?: string
        }
        Update: {
          buyer_confirmed_at?: string | null
          buyer_id?: string
          courier_id?: string | null
          created_at?: string
          delivered_at?: string | null
          id?: string
          item_price?: number
          listing_id?: string | null
          order_number?: string
          seller_id?: string
          service_fee?: number
          shipped_at?: string | null
          shipping_address?: Json | null
          shipping_cost?: number
          status?: Database["public"]["Enums"]["order_status"]
          total_amount?: number
          tracking_number?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          account_type: string
          address_line1: string | null
          address_line2: string | null
          avatar_url: string | null
          business_registration_number: string | null
          city: string | null
          company_name: string | null
          created_at: string
          display_name: string
          email: string | null
          id: string
          is_founding_vendor: boolean
          is_wedding_expert: boolean
          phone: string | null
          postal_code: string | null
          province: string | null
          updated_at: string
          user_id: string
          vendor_bio: string | null
          wedding_expert_trial_expires_at: string | null
        }
        Insert: {
          account_type?: string
          address_line1?: string | null
          address_line2?: string | null
          avatar_url?: string | null
          business_registration_number?: string | null
          city?: string | null
          company_name?: string | null
          created_at?: string
          display_name: string
          email?: string | null
          id?: string
          is_founding_vendor?: boolean
          is_wedding_expert?: boolean
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          updated_at?: string
          user_id: string
          vendor_bio?: string | null
          wedding_expert_trial_expires_at?: string | null
        }
        Update: {
          account_type?: string
          address_line1?: string | null
          address_line2?: string | null
          avatar_url?: string | null
          business_registration_number?: string | null
          city?: string | null
          company_name?: string | null
          created_at?: string
          display_name?: string
          email?: string | null
          id?: string
          is_founding_vendor?: boolean
          is_wedding_expert?: boolean
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          updated_at?: string
          user_id?: string
          vendor_bio?: string | null
          wedding_expert_trial_expires_at?: string | null
        }
        Relationships: []
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string
          id: string
          order_id: string
          rating: number
          reviewee_id: string
          reviewer_id: string
          reviewer_type: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: string
          order_id: string
          rating: number
          reviewee_id: string
          reviewer_id: string
          reviewer_type: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: string
          order_id?: string
          rating?: number
          reviewee_id?: string
          reviewer_id?: string
          reviewer_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_safe"
            referencedColumns: ["id"]
          },
        ]
      }
      shipments: {
        Row: {
          courier_name: string
          created_at: string
          delivery_address: Json | null
          estimated_delivery: string | null
          id: string
          order_id: string
          parcel_details: Json | null
          pickup_address: Json | null
          rate_quote: number | null
          status: string | null
          tracking_url: string | null
          updated_at: string
          waybill_number: string | null
        }
        Insert: {
          courier_name?: string
          created_at?: string
          delivery_address?: Json | null
          estimated_delivery?: string | null
          id?: string
          order_id: string
          parcel_details?: Json | null
          pickup_address?: Json | null
          rate_quote?: number | null
          status?: string | null
          tracking_url?: string | null
          updated_at?: string
          waybill_number?: string | null
        }
        Update: {
          courier_name?: string
          created_at?: string
          delivery_address?: Json | null
          estimated_delivery?: string | null
          id?: string
          order_id?: string
          parcel_details?: Json | null
          pickup_address?: Json | null
          rate_quote?: number | null
          status?: string | null
          tracking_url?: string | null
          updated_at?: string
          waybill_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_safe"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vendor_enquiries: {
        Row: {
          created_at: string
          id: string
          is_read: boolean | null
          message: string
          user_email: string | null
          user_id: string
          user_name: string | null
          user_phone: string | null
          vendor_id: string
          wedding_date: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          message: string
          user_email?: string | null
          user_id: string
          user_name?: string | null
          user_phone?: string | null
          vendor_id: string
          wedding_date?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string
          user_email?: string | null
          user_id?: string
          user_name?: string | null
          user_phone?: string | null
          vendor_id?: string
          wedding_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_enquiries_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendor_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_enquiries_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendor_profiles_public"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_enquiry_replies: {
        Row: {
          created_at: string
          enquiry_id: string
          id: string
          is_read: boolean | null
          message: string
          sender_id: string
          sender_type: string
        }
        Insert: {
          created_at?: string
          enquiry_id: string
          id?: string
          is_read?: boolean | null
          message: string
          sender_id: string
          sender_type: string
        }
        Update: {
          created_at?: string
          enquiry_id?: string
          id?: string
          is_read?: boolean | null
          message?: string
          sender_id?: string
          sender_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_enquiry_replies_enquiry_id_fkey"
            columns: ["enquiry_id"]
            isOneToOne: false
            referencedRelation: "vendor_enquiries"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_profiles: {
        Row: {
          business_name: string
          category: string
          city: string | null
          cover_image_url: string | null
          created_at: string
          description: string | null
          email: string | null
          enquiries_count: number | null
          facebook: string | null
          featured_order: number | null
          gallery_images: string[] | null
          id: string
          instagram: string | null
          is_verified: boolean | null
          location: string | null
          logo_url: string | null
          phone: string | null
          price_range: string | null
          province: string | null
          services_offered: string | null
          status: Database["public"]["Enums"]["vendor_status"]
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subcategory: string | null
          subscription_ends_at: string | null
          subscription_started_at: string | null
          tier: Database["public"]["Enums"]["vendor_tier"]
          trial_ends_at: string | null
          updated_at: string
          user_id: string
          views_count: number | null
          website: string | null
        }
        Insert: {
          business_name: string
          category: string
          city?: string | null
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          enquiries_count?: number | null
          facebook?: string | null
          featured_order?: number | null
          gallery_images?: string[] | null
          id?: string
          instagram?: string | null
          is_verified?: boolean | null
          location?: string | null
          logo_url?: string | null
          phone?: string | null
          price_range?: string | null
          province?: string | null
          services_offered?: string | null
          status?: Database["public"]["Enums"]["vendor_status"]
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subcategory?: string | null
          subscription_ends_at?: string | null
          subscription_started_at?: string | null
          tier?: Database["public"]["Enums"]["vendor_tier"]
          trial_ends_at?: string | null
          updated_at?: string
          user_id: string
          views_count?: number | null
          website?: string | null
        }
        Update: {
          business_name?: string
          category?: string
          city?: string | null
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          enquiries_count?: number | null
          facebook?: string | null
          featured_order?: number | null
          gallery_images?: string[] | null
          id?: string
          instagram?: string | null
          is_verified?: boolean | null
          location?: string | null
          logo_url?: string | null
          phone?: string | null
          price_range?: string | null
          province?: string | null
          services_offered?: string | null
          status?: Database["public"]["Enums"]["vendor_status"]
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subcategory?: string | null
          subscription_ends_at?: string | null
          subscription_started_at?: string | null
          tier?: Database["public"]["Enums"]["vendor_tier"]
          trial_ends_at?: string | null
          updated_at?: string
          user_id?: string
          views_count?: number | null
          website?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      orders_safe: {
        Row: {
          buyer_confirmed_at: string | null
          buyer_id: string | null
          courier_id: string | null
          created_at: string | null
          delivered_at: string | null
          id: string | null
          item_price: number | null
          listing_id: string | null
          order_number: string | null
          seller_id: string | null
          service_fee: number | null
          shipped_at: string | null
          shipping_address: Json | null
          shipping_cost: number | null
          status: Database["public"]["Enums"]["order_status"] | null
          total_amount: number | null
          tracking_number: string | null
          updated_at: string | null
        }
        Insert: {
          buyer_confirmed_at?: string | null
          buyer_id?: string | null
          courier_id?: string | null
          created_at?: string | null
          delivered_at?: string | null
          id?: string | null
          item_price?: number | null
          listing_id?: string | null
          order_number?: string | null
          seller_id?: string | null
          service_fee?: number | null
          shipped_at?: string | null
          shipping_address?: never
          shipping_cost?: number | null
          status?: Database["public"]["Enums"]["order_status"] | null
          total_amount?: number | null
          tracking_number?: string | null
          updated_at?: string | null
        }
        Update: {
          buyer_confirmed_at?: string | null
          buyer_id?: string | null
          courier_id?: string | null
          created_at?: string | null
          delivered_at?: string | null
          id?: string | null
          item_price?: number | null
          listing_id?: string | null
          order_number?: string | null
          seller_id?: string | null
          service_fee?: number | null
          shipped_at?: string | null
          shipping_address?: never
          shipping_cost?: number | null
          status?: Database["public"]["Enums"]["order_status"] | null
          total_amount?: number | null
          tracking_number?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      public_profiles: {
        Row: {
          account_type: string | null
          avatar_url: string | null
          created_at: string | null
          display_name: string | null
          is_founding_vendor: boolean | null
          user_id: string | null
          vendor_bio: string | null
        }
        Insert: {
          account_type?: string | null
          avatar_url?: string | null
          created_at?: string | null
          display_name?: string | null
          is_founding_vendor?: boolean | null
          user_id?: string | null
          vendor_bio?: string | null
        }
        Update: {
          account_type?: string | null
          avatar_url?: string | null
          created_at?: string | null
          display_name?: string | null
          is_founding_vendor?: boolean | null
          user_id?: string | null
          vendor_bio?: string | null
        }
        Relationships: []
      }
      vendor_profiles_public: {
        Row: {
          business_name: string | null
          category: string | null
          city: string | null
          cover_image_url: string | null
          created_at: string | null
          description: string | null
          enquiries_count: number | null
          featured_order: number | null
          gallery_images: string[] | null
          id: string | null
          is_verified: boolean | null
          location: string | null
          logo_url: string | null
          price_range: string | null
          province: string | null
          services_offered: string | null
          status: Database["public"]["Enums"]["vendor_status"] | null
          subcategory: string | null
          tier: Database["public"]["Enums"]["vendor_tier"] | null
          updated_at: string | null
          user_id: string | null
          views_count: number | null
        }
        Insert: {
          business_name?: string | null
          category?: string | null
          city?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          description?: string | null
          enquiries_count?: number | null
          featured_order?: number | null
          gallery_images?: string[] | null
          id?: string | null
          is_verified?: boolean | null
          location?: string | null
          logo_url?: string | null
          price_range?: string | null
          province?: string | null
          services_offered?: string | null
          status?: Database["public"]["Enums"]["vendor_status"] | null
          subcategory?: string | null
          tier?: Database["public"]["Enums"]["vendor_tier"] | null
          updated_at?: string | null
          user_id?: string | null
          views_count?: number | null
        }
        Update: {
          business_name?: string | null
          category?: string | null
          city?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          description?: string | null
          enquiries_count?: number | null
          featured_order?: number | null
          gallery_images?: string[] | null
          id?: string | null
          is_verified?: boolean | null
          location?: string | null
          logo_url?: string | null
          price_range?: string | null
          province?: string | null
          services_offered?: string | null
          status?: Database["public"]["Enums"]["vendor_status"] | null
          subcategory?: string | null
          tier?: Database["public"]["Enums"]["vendor_tier"] | null
          updated_at?: string | null
          user_id?: string | null
          views_count?: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      check_expired_vendor_trials: { Args: never; Returns: undefined }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      purge_old_shipping_addresses: { Args: never; Returns: undefined }
      update_expired_boosts: { Args: never; Returns: undefined }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      listing_status: "draft" | "active" | "sold" | "reserved" | "inactive"
      order_status:
        | "pending"
        | "paid"
        | "shipped"
        | "delivered"
        | "completed"
        | "disputed"
        | "refunded"
        | "cancelled"
      payment_status: "pending" | "in_escrow" | "released" | "refunded"
      vendor_status: "pending" | "trial" | "active" | "suspended" | "cancelled"
      vendor_tier: "basic" | "premium" | "featured"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      listing_status: ["draft", "active", "sold", "reserved", "inactive"],
      order_status: [
        "pending",
        "paid",
        "shipped",
        "delivered",
        "completed",
        "disputed",
        "refunded",
        "cancelled",
      ],
      payment_status: ["pending", "in_escrow", "released", "refunded"],
      vendor_status: ["pending", "trial", "active", "suspended", "cancelled"],
      vendor_tier: ["basic", "premium", "featured"],
    },
  },
} as const
