import streamlit as st
import os

# Set page configuration
st.set_page_config(
    page_title="Home",
    page_icon="🍏",  # Changed page icon to an apple emoji
)

# Function to get the path of the assets folder
def get_image_path(filename):
    return os.path.join("assets", filename)

# Get banner image URL from the assets folder
banner_path = get_image_path("banner.jpg")
# Title and welcome message with banner
st.image(banner_path, use_column_width=True)
st.title("Welcome to Zeppcore! 👋")
st.sidebar.success("Select a recommendation app.")

# Introduction section
st.markdown("""
    <div style="background-color: #f0f0f0; padding: 20px; border-radius: 10px;">
        <h2 style="color: #333; text-align: center;">Introduction</h2>
        <p>This app provides recommendations for diet and nutrition based on your fitness goals and preferences.</p>
    </div>
""", unsafe_allow_html=True)

# How it Works section
st.markdown("""
    <div style="background-color: #e6f7ff; padding: 20px; border-radius: 10px; margin-top: 20px;">
        <h2 style="color: #007bff; text-align: center;">How it Works</h2>
        <ol>
            <li> <strong>Diet Recommendation:</strong> Get personalized diet plans tailored to your fitness goals.</li>
            <li> <strong>Custom Food Recommendation:</strong> Discover healthy food options based on your dietary preferences.</li>
        </ol>
        <p>Use the sidebar to navigate between different recommendation apps.</p>
    </div>
""", unsafe_allow_html=True)
# Image features section
st.markdown("""
    ## Key Features
""")

# Create two columns for images and descriptions
col1, col2 = st.columns(2)

# Display images and descriptions in columns
with col1:
    st.image(get_image_path("diet.png"), caption='**Personalized Diet Recommendations**', use_column_width=True, clamp=True)

with col2:
    st.image(get_image_path("custom_food.png"), caption='**Custom Food Recommendations**', use_column_width=True, clamp=True)

col3, col4 = st.columns(2)

with col3:
    st.image(get_image_path("calorie_track.png"), caption='**Calorie & Nutrition Monitoring**', use_column_width=True, clamp=True)
with col4:
    st.image(get_image_path("workout_plan.png"), caption='**Curated Workout Plans**', use_column_width=True, clamp=True)

# Add any additional content or visual elements as needed
